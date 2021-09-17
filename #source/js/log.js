let logger = JSON.parse(localStorage['pepcount_logger']);
console.log('logger', logger);
let output = $('div');

for (let i = 0; i < logger.length; i++) {
	output.append(`${JSON.stringify(logger[i])},\n`);
}

let check = [
	{ "time": 57425, "timeString": "15:57:05", "meaning": "start", "action": "start" },

	{ "time": 57432, "counter": 1, "timeString": "15:57:12", "meaning": "Значиць", "action": "+" },

	{ "time": 57432, "counter": 2, "timeString": "15:57:12", "meaning": "Значиць", "action": "+" },

	{ "time": 57432, "counter": 3, "timeString": "15:57:12", "meaning": "Значиць", "action": "+" },

	{ "time": 57432, "counter": 4, "timeString": "15:57:12", "meaning": "Значиць", "action": "+" },

	{ "time": 57442, "counter": 1, "timeString": "15:57:22", "meaning": "Скажем", "action": "+" },

	{ "time": 57443, "counter": 2, "timeString": "15:57:23", "meaning": "Скажем", "action": "+" },

	{ "time": 57443, "counter": 3, "timeString": "15:57:23", "meaning": "Скажем", "action": "+" },

	{ "time": 57443, "counter": 4, "timeString": "15:57:23", "meaning": "Скажем", "action": "+" },

	{ "time": 57483, "counter": 1, "timeString": "15:58:03", "meaning": "Это самое", "action": "+" },

	{ "time": 57484, "counter": 2, "timeString": "15:58:04", "meaning": "Это самое", "action": "+" },

	{ "time": 57484, "counter": 3, "timeString": "15:58:04", "meaning": "Это самое", "action": "+" },

	{ "time": 57487, "counter": 1, "timeString": "15:58:07", "meaning": "Кхе...", "action": "+" },

	{ "time": 57488, "counter": 1, "timeString": "15:58:08", "meaning": "В принципе да", "action": "+" },

	{ "time": 57488, "counter": 2, "timeString": "15:58:08", "meaning": "В принципе да", "action": "+" },

	{ "time": 57490, "counter": 5, "timeString": "15:58:10", "meaning": "Значиць", "action": "+" },

	{ "time": 57491, "counter": 5, "timeString": "15:58:11", "meaning": "Скажем", "action": "+" },

	{ "time": 57499, "counter": 1, "timeString": "15:58:19", "meaning": "Повторение", "action": "+" },

	{ "time": 57499, "counter": 2, "timeString": "15:58:19", "meaning": "Повторение", "action": "+" },

	{ "time": 57499, "counter": 3, "timeString": "15:58:19", "meaning": "Повторение", "action": "+" },

	{ "time": 57499, "counter": 4, "timeString": "15:58:19", "meaning": "Повторение", "action": "+" },

	{ "time": 57499, "counter": 5, "timeString": "15:58:19", "meaning": "Повторение", "action": "+" },

	{ "time": 57500, "counter": 6, "timeString": "15:58:20", "meaning": "Повторение", "action": "+" },

	{ "time": 57500, "counter": 7, "timeString": "15:58:20", "meaning": "Повторение", "action": "+" },

	{ "time": 57510, "counter": 8, "timeString": "15:58:30", "meaning": "Повторение", "action": "+" },

	{ "time": 57511, "counter": 9, "timeString": "15:58:31", "meaning": "Повторение", "action": "+" },
];

console.log('check', check)