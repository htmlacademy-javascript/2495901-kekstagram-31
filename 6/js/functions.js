const isMeetingInWorkTime = (startWorkTime, endWorkTime, startMeetingTime, meeringDuration) => {
  const [startWorkHours, startWorkMinutes] = startWorkTime.split(':').map(Number);
  const [endWorkHours, endWorkMinutes] = endWorkTime.split(':').map(Number);
  const [startMeetingHours, estartMeetingMinutes] = startMeetingTime.split(':').map(Number);

  const startWorkTimeMinutes = startWorkHours * 60 + startWorkMinutes;
  const endWorkTimeMinutes = endWorkHours * 60 + endWorkMinutes;
  const startMeetingTimeMinutes = startMeetingHours * 60 + estartMeetingMinutes;
  const endMeetingTimeMinutes = startMeetingTimeMinutes + meeringDuration;

  return startMeetingTimeMinutes >= startWorkTimeMinutes && endMeetingTimeMinutes <= endWorkTimeMinutes;
};


