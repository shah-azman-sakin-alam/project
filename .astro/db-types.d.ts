// This file is generated by Astro DB
declare module 'astro:db' {
	export const users: import("@astrojs/db/runtime").Table<
		"users",
		{"email":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"email","collection":"users","primaryKey":false,"optional":false}},"password":{"type":"text","schema":{"unique":false,"deprecated":false,"name":"password","collection":"users","primaryKey":false,"optional":false}}}
	>;
}
