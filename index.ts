import { API_KEY } from "./api-key";
import { EnterPortal, EnterWhisper, Game } from "@gathertown/gather-game-client";
global.WebSocket = require("isomorphic-ws");
const spaceId = "UvXBVt6vw9JZoqDn\\Pokemon"; // replace with your spaceId of choice
const mapId = "custom-entrance"; //replace with your mapId of choice
const game = new Game(spaceId, () => Promise.resolve({ apiKey: API_KEY })); 
game.connect(); 
game.subscribeToConnection((connected) => console.log("connected?", connected));

game.waitForInit()
setTimeout(() => {
    game.filterObjectsInMap(mapId ,(obj) => obj?.id ? obj?.id.startsWith(""): true); //list all items in specified map
    game.filterPlayersInSpace((player) => player.name?.startsWith("")); //list all players in space

    //subscriptions 
    game.subscribeToEvent("playerMoves", (data, context) =>{
        //code here
        console.log(context); //see data given from subscription
    });

    //items
    game.deleteObject(mapId: string, objId: string, createTxnId?: boolean);
    game.deleteObjectByKey(mapId: string, key: number, createTxnId?: boolean);
    game.filterObjectsInMap(mapId: string, filter: (obj: Partial<MapObject>) => boolean);
    game.getObject(objId: string, mapId?: string);
    game.moveMapObject(mapId: string, objectId: string, targetWorldPos: { x: number; xOffset?: number; y: number; yOffset?: number }, durationMs: number, easing?: "Linear" | "Cubic" | "Elastic" | "Bounce" | "Back");
    setitem? clearitem? setmapobjects? triggeritem?
    game.setObject(mapId: string, objId: string, obj: Partial<MapObject>, useTxnId?: boolean);

    //players
    //set player field
    game.setActivelySpeaking
    game.setAffiliation
    game.setCurrentArea
    game.setCurrentDesk
    game.setEmojiStatus
    game.setEmote
    game.setEventStatus
    game.setFollowTarget
    game.setInConversation
    game.setIsAlone
    game.setIsMobile
    game.setManualVideoSrc
    game.setName
    game.setOpenToConversation
    game.setOutfitString
    game.setSpotlight
    game.setStatus
    game.setSubtitle
    game.setTextStatus

    game.enterPortal
    game.enterWhisper
    game.filterPlayersInSpace
    game.getPlayer
    game.getPlayersInMap
    game.ghost
    game.isPlayerInPrivateSpace
    game.kickPlayer
    game.leaveWhisper
    game.move
    game.playSound
    game.requestToLead
    game.respawn
    game.ring
    game.screenPointer?
    game.shootConfetti
    game.spawn
    game.teleport

    //map


}, 5000);

