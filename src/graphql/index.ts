import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import { buildSchema, Query, Resolver } from "type-graphql";
import { AllWebsites } from "./Resolvers/AllWebsites";

@Resolver()
class HelloWorldResolver {
	@Query(() => String, { description: "Hello!" })
	async helloWorld(): Promise<string> {
		return "Hello world!";
	}
}

export const createApolloServer = async (): Promise<ApolloServer> => {
	const schema = await buildSchema({ resolvers: [HelloWorldResolver, AllWebsites] });

	return new ApolloServer({
		schema,
		playground: true,
		introspection: true,
	});
};
