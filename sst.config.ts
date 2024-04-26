import { SSTConfig } from "sst";
import { Api, Bucket, NextjsSite } from "sst/constructs";

export default {
  config(_input) {
    return {
      name: "mi",
      region: "us-east-1",
    };
  },
  stacks(app) {
    app.stack(function Site({ stack }) {
      const api = new Api(stack, "api", {
        routes: {
          "GET /": "functions/lambda.handler",
        },
      });

      const bucket = new Bucket(stack, "bucket");
      const site = new NextjsSite(stack, "site", {
        bind: [bucket],
        environment: {
          API_URL: api.url,
        },
      });
      site.node.addDependency(api);

      stack.addOutputs({
        SiteUrl: site.url,
      });
    });
  },
} satisfies SSTConfig;
