import get from "./msw-utils";
import authinfo from "./auth.json";
import brukerinfo from "./brukerinfo.json";
import oppfolginginfo from "./oppfolging.json";
import { authUrl, brukerinfoUrl, oppfolgingUrl } from "../url";

export const handlers = [get(authUrl, authinfo), get(brukerinfoUrl, brukerinfo), get(oppfolgingUrl, oppfolginginfo)];
