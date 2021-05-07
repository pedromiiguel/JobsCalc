const Profile = require('../model/Profile');

module.exports = {
  async index(req, res) {
    const user = await Profile.get();

    return res.json(user);
  },

  async update(req, res) {
    const data = req.body;

      //Definir qtas semantas tem no ano
      const weeksPerYear = 52;
      // remover as semanas de férias do ano, para pegar quantas semanas tem em 1 mês
      const weeksPerMonth = (weeksPerYear - data.vacation_per_year) / 12;

      // total de horas trabalhadas na semana
      const weekTotalHours = data.hours_per_day * data.days_per_week;

      // horas trabalhadas no mês
      const monthlyTotalHours = weekTotalHours * weeksPerMonth;

      // qual será o valor da minha hora?
      const valueHour = data.monthly_budget / monthlyTotalHours;
      console.log(valueHour)

      const profile = await Profile.get();

      await Profile.update({
        ...profile,
        ...req.body,
        value_hour: valueHour,
      });

    return res.status(201).send()
      
  },
};
