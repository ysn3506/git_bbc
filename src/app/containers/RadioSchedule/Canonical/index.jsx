import React, { useEffect, useState, useContext } from 'react';
import 'isomorphic-fetch';
import { string } from 'prop-types';
import styled from 'styled-components';
import RadioSchedule from '@bbc/psammead-radio-schedule';
import moment from 'moment';
import findLastIndex from 'ramda/src/findLastIndex';
import propSatisfies from 'ramda/src/propSatisfies';
import SectionLabel from '@bbc/psammead-section-label';
import { Link } from '@bbc/psammead-story-promo';
import { ServiceContext } from '#contexts/ServiceContext';
import webLogger from '#lib/logger.web';

const logger = webLogger();

const RadioFrequencyLink = styled(Link)`
  font-size: 14px;
  line-height: 18px;
`;

const CanonicalRadioSchedule = ({ endpoint }) => {
  const [schedule, setRadioSchedule] = useState();
  const {
    service,
    script,
    dir,
    timezone,
    locale,
    radioSchedule: { header, frequenciesPageUrl, frequenciesPageLabel },
  } = useContext(ServiceContext);

  const getProgramState = (currentTime, startTime, endTime) => {
    const isLive = currentTime < endTime && currentTime > startTime;
    if (isLive) {
      return 'live';
    }
    const hasEnded = currentTime > endTime;
    if (hasEnded) {
      return 'onDemand';
    }
    return 'next';
  };

  useEffect(() => {
    const getLink = (state, program) => {
      const url = `/${service}/${program.serviceId}`;
      return state === 'live'
        ? `${url}/liveradio`
        : `${url}/${program.broadcast.pid}`;
    };

    const handleResponse = async response => {
      const radioScheduleData = await response.json();

      const currentTime = parseInt(moment.utc().format('x'), 10);
      // finding latest program, that may or may not still be live. this is because there isn't
      // always a live program, in which case we show the most recently played program on demand.
      const latestProgramIndex = findLastIndex(
        propSatisfies(time => time < currentTime, 'publishedTimeStart'),
      )(radioScheduleData.schedules);

      const radioSchedules = radioScheduleData.schedules;

      const scheduleDataIsComplete =
        radioSchedules[latestProgramIndex - 2] &&
        radioSchedules[latestProgramIndex + 1];
      const schedulesToShow = scheduleDataIsComplete && [
        radioSchedules[latestProgramIndex],
        radioSchedules[latestProgramIndex - 1],
        radioSchedules[latestProgramIndex - 2],
        radioSchedules[latestProgramIndex + 1],
      ];

      const schedules =
        schedulesToShow &&
        schedulesToShow.map(program => {
          const currentState = getProgramState(
            currentTime,
            program.publishedTimeStart,
            program.publishedTimeEnd,
          );
          return {
            id: program.broadcast.pid,
            state: currentState,
            stateLabel: currentState,
            startTime: program.publishedTimeStart,
            link: getLink(currentState, program),
            brandTitle: program.brand.title,
            episodeTitle: program.episode.presentationTitle,
            summary: program.episode.synopses.short,
            duration: program.publishedTimeDuration,
            durationLabel: 'Duration',
          };
        });
      setRadioSchedule(schedules);
    };

    const fetchRadioScheduleData = pathname =>
      fetch(pathname, { mode: 'no-cors' })
        .then(handleResponse)
        .catch(e => logger.error(`HTTP Error: "${e}"`));

    fetchRadioScheduleData(endpoint);
  }, [endpoint, service, script, timezone, locale]);

  console.log(schedule);

  if (!schedule) {
    return null;
  }

  const renderFrequencyLink = (link, label) => (
    <RadioFrequencyLink link={link}>{label}</RadioFrequencyLink>
  );

  return (
    <>
      <SectionLabel
        script={script}
        labelId="Radio-Schedule"
        service={service}
        dir={dir}
      >
        {header}
      </SectionLabel>
      {schedule && (
        <RadioSchedule
          schedules={schedule}
          locale={locale}
          timezone={timezone}
          script={script}
          service={service}
          dir={dir}
        />
      )}
      {frequenciesPageUrl &&
        renderFrequencyLink(frequenciesPageUrl, frequenciesPageLabel)}
    </>
  );
};

CanonicalRadioSchedule.propTypes = {
  endpoint: string.isRequired,
};

export default CanonicalRadioSchedule;
