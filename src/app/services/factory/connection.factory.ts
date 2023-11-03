import { ConnectionDbService } from "../connection-db.service";
import { ProfileService } from "../profile.service";

export const connectionFactory =
  (connectionDbService: ConnectionDbService) =>
    new ProfileService(connectionDbService.isConnected());
