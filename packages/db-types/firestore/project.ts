import { Timestamp } from "@firebase/firestore";
import { ConfigKVObject } from "../cloudflare/config";
import { z } from "zod";

const Project = ConfigKVObject.extend({
  admin_config: z.object({
    name: z.string(),
    members: z.array(z.string()),
  }),
  created_at: z.custom<Timestamp>(),
  updated_at: z.custom<Timestamp>(),
});

export type Project = z.infer<typeof Project>;
