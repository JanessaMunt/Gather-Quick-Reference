"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_key_1 = require("./api-key");
const gather_game_client_1 = require("@gathertown/gather-game-client");
global.WebSocket = require("isomorphic-ws");
const spaceId = "UvXBVt6vw9JZoqDn\\Pokemon"; // replace with your spaceId of choice
const mapId = "custom-entrance"; //replace with your mapId of choice
const game = new gather_game_client_1.Game(spaceId, () => Promise.resolve({ apiKey: api_key_1.API_KEY }));
game.connect();
game.subscribeToConnection((connected) => console.log("connected?", connected));
game.waitForInit();
setTimeout(() => {
    game.filterObjectsInMap(mapId, (obj) => (obj === null || obj === void 0 ? void 0 : obj.id) ? obj === null || obj === void 0 ? void 0 : obj.id.startsWith("") : true); //list all items in specified map
    console.log(game.filterPlayersInSpace((player) => { var _a; return (_a = player.name) === null || _a === void 0 ? void 0 : _a.startsWith(""); }));
    //console.log(test);
}, 5000);
