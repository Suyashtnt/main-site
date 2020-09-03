import { Query, Resolver } from "type-graphql";

@Resolver()
export class AllWebsites {
    @Query(() => String, { description: "All websites" })
	async AllWebsites(): Promise<Array<{name: string, desc: string, link: string}>> {
		return [
			{
				name: "moosik",
				desc: "basic music player",
				link: "moosik.tnt-man-inc.com",
			},
			{
				name: "bot",
				desc: "my discord bot",
				link: "bot.tnt-man-inc.com",
			},
		];
	}
}
