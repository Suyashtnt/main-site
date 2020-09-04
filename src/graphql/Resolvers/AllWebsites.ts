import { Query, Resolver } from "type-graphql";
import type { RecursiveArray } from "type-graphql/dist/decorators/types";

@Resolver()
export class AllWebsites {
    @Query(() => String, { description: "All websites" })
	async AllWebsites(): Promise<Array<{title: string, desc: string, link: string}>> {
		return [
			{
				title: "moosik",
				desc: "basic music player",
				link: "moosik.tnt-man-inc.com",
			},
			{
				title: "bot",
				desc: "my discord bot",
				link: "bot.tnt-man-inc.com",
			},
		];
	}
}
