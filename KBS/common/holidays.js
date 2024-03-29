(function () {
	"use strict";
	var T, m, i, p, r, e, n, t, v, u, M, l, o, f, y, C, a, s, c, g, h, d, D, J, U, H;
	s = function (n, t, e, u, r, l, i, o) {
	  var f;
	  return (f = new Date(2e3, 0, 1)).setTime(n.getTime() + 1e3 * (60 * (60 * (24 * (null != u ? u : 0) + (null != r ? r : 0)) + (null != l ? l : 0)) + (null != i ? i : 0)) + (null != o ? o : 0)), f.setFullYear(f.getFullYear() + (null != t ? t : 0) + Math.floor((f.getMonth() + (null != e ? e : 0)) / 12)), f.setMonth(((f.getMonth() + (null != e ? e : 0)) % 12 + 12) % 12), f
	}, U = function (n) {
	  return s(n, 0, 0, 0, 9)
	}, f = function (n) {
	  return s(n, 0, 0, 0, -9)
	}, H = function (n, t, e) {
	  return new Date(Date.UTC(n, t, e))
	}, y = function (n, t, e) {
	  return f(H(n, t, e))
	}, r = function (n) {
	  return U(n).getUTCDay()
	}, p = function (n) {
	  return U(n).getUTCDate()
	}, v = function (n) {
	  return U(n).getUTCMonth()
	}, e = function (n) {
	  return U(n).getUTCFullYear()
	}, n = function (n) {
	  return U(n).getUTCHours()
	}, t = function (n) {
	  return U(n).getUTCMinutes()
	}, u = function (e, u) {
	  return function (n) {
		var t;
		return t = y(n, e - 1, 1), s(t, 0, 0, (7 - (r(t) - 1)) % 7 + 7 * (u - 1))
	  }
	}, d = function (n) {
	  return new Date(31556940400 * (n - 1949) - 6558667e5)
	}, h = function (n) {
	  var t;
	  return t = d(n), y(n, v(t), p(t))
	}, g = function (n) {
	  var t;
	  return (t = {
		1603: 23,
		2074: 23,
		2355: 23,
		2384: 22
	  }[n]) ? y(n, 8, t) : new Date(3155691e4 * (n - 1948) - 67131691e4)
	}, c = function (n) {
	  var t;
	  return t = g(n), y(n, v(t), p(t))
	}, T = [
	  ["元日", (D = function (t, e) {
		return function (n) {
		  return y(n, t - 1, e)
		}
	  })(1, 1), 1949],
	  ["成人の日", D(1, 15), 1949, 1999],
	  ["成人の日", u(1, 2), 2e3],
	  ["建国記念の日", D(2, 11), 1967],
	  ["天皇誕生日", D(2, 23), 2020],
	  ["昭和天皇の大喪の礼", D(2, 24), 1989, 1989],
	  ["春分の日", h, 1949],
	  ["皇太子明仁親王の結婚の儀", D(4, 10), 1959, 1959],
	  ["天皇誕生日", D(4, 29), 1949, 1988],
	  ["みどりの日", D(4, 29), 1989, 2006],
	  ["昭和の日", D(4, 29), 2007],
	  ["即位の日", D(5, 1), 2019, 2019],
	  ["憲法記念日", D(5, 3), 1949],
	  ["みどりの日", D(5, 4), 2007],
	  ["こどもの日", D(5, 5), 1949],
	  ["皇太子徳仁親王の結婚の儀", D(6, 9), 1993, 1993],
	  ["海の日", D(7, 20), 1996, 2002],
	  ["海の日", u(7, 3), 2003, 2019],
	  ["海の日", D(7, 23), 2020, 2020],
	  ["海の日", D(7, 22), 2021, 2021],
	  ["海の日", u(7, 3), 2022],
	  ["山の日", D(8, 11), 2016, 2019],
	  ["山の日", D(8, 10), 2020, 2020],
	  ["山の日", D(8, 8), 2021, 2021],
	  ["山の日", D(8, 11), 2022],
	  ["敬老の日", D(9, 15), 1966, 2002],
	  ["敬老の日", u(9, 3), 2003],
	  ["秋分の日", c, 1948],
	  ["体育の日", D(10, 10), 1966, 1999],
	  ["体育の日", u(10, 2), 2e3, 2019],
	  ["スポーツの日", D(7, 24), 2020, 2020],
	  ["スポーツの日", D(7, 23), 2021, 2021],
	  ["スポーツの日", u(10, 2), 2022],
	  ["即位礼正殿の儀", D(10, 22), 2019, 2019],
	  ["文化の日", D(11, 3), 1948],
	  ["即位礼正殿の儀", D(11, 12), 1990, 1990],
	  ["勤労感謝の日", D(11, 23), 1948],
	  ["天皇誕生日", D(12, 23), 1989, 2018]
	], m = function (n) {
	  var t;
	  if (0, n < y(1973, 3, 29) || 0 !== r(n)) return null;
	  if (t = s(n, 0, 0, 1), !o(t, !1)) return t;
	  if (n < y(2007, 0, 1)) return null;
	  for (;;)
		if (t = s(t, 0, 0, 1), !o(t, !1)) return t
	}, C = function (n) {
	  var t;
	  return e(n) < 1988 ? null : o(s(n, 0, 0, 2), !1) ? (t = s(n, 0, 0, 1), o(t, !1) || 0 === r(t) || 1 === r(t) ? null : t) : null
	}, M = {
	  true: {},
	  false: {}
	}, i = function (n, t) {
	  var e, u, r, l, i, o, f, a, s, c, g, h, d, D;
	  if (null != (e = M[t = !(null != t && !t)][n])) return e;
	  for (D = {}, i = 0, a = T.length; i < a; i++) null != (r = T[i])[2] && n < r[2] || null != r[3] && r[3] < n || null != (l = r[1](n)) && (D[[c = v(l) + 1, u = p(l)]] = r[0]);
	  for (g in M[!(f = [])][n] = D) g = g.split(","), null != (l = C(y(n, g[0] - 1, g[1]))) && (c = v(l) + 1, u = p(l), f.push([c, u]));
	  for (o = 0, s = f.length; o < s; o++) D[l = f[o]] = "国民の休日";
	  for (g in d = {}, D) h = D[g], d[g] = h, g = g.split(","), null != (l = m(y(n, g[0] - 1, g[1]))) && (d[[c = v(l) + 1, u = p(l)]] = "振替休日");
	  return M[!0][n] = d, M[t][n]
	}, (J = null != (a = "undefined" != typeof module && null !== module ? module.exports : void 0) ? a : this.JapaneseHolidays = {}).getHolidaysOf = function (n, t) {
	  var e, u, r, l;
	  for (e in l = [], r = i(n, t)) u = r[e], l.push({
		month: parseInt(e.split(",")[0]),
		date: parseInt(e.split(",")[1]),
		name: u
	  });
	  return l.sort(function (n, t) {
		return n.month - t.month || n.date - t.date
	  }), l
	}, l = function (n, t) {
	  return i(n.getFullYear(), t)[[n.getMonth() + 1, n.getDate()]]
	}, o = function (n, t) {
	  return i(e(n), t)[[v(n) + 1, p(n)]]
	}, J.isHoliday = l, J.isHolidayAt = o, J.shiftDate = s, J.u2j = U, J.j2u = f, J.jDate = y, J.uDate = H, J.getJDay = r, J.getJDate = p, J.getJMonth = v, J.getJFullYear = e, J.getJHours = n, J.getJMinutes = t, J.__forTest = {
	  shunbunWithTime: d,
	  shubunWithTime: g
	}
  }).call(this);
  //# sourceMappingURL=japanese-holidays.min.js.map