module.exports = {
  remainingDays(job) {
    // cálculo de tempo restante
    const remainingDays = (job.total_hours / job.daily_hours).toFixed();

    const createdDate = new Date(job.created_at);
    const dueDay = createdDate.getDate() + Number(remainingDays);
    const dueDateInMs = createdDate.setDate(dueDay);

    const timeDiffInMs = dueDateInMs - Date.now();
    // transformar milli em dias
    const dayInMs = 1000 * 60 * 60 * 24;
    const dayDiff = Math.floor(timeDiffInMs / dayInMs);

    // restam x dias
    return dayDiff;
  },
  calculateBudget: (job, valueHour) => valueHour * job.total_hours,
};
