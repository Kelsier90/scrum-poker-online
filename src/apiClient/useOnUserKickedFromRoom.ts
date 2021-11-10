import useSocketListener from './core/useSocketListener'
import ClientEvent from '../shared/types/ClientEvent'
import { RoomUser } from '@src/types/Room'
import { composeRoomChannel } from '@src/shared/rooms/utils/roomChannel'

export default function useOnUserKickedFromRoom(
  roomId: string,
  callback: (data: RoomUser) => void,
  listen = true
): void {
  useSocketListener(
    composeRoomChannel(roomId),
    ClientEvent.USER_KICKED_FROM_ROOM,
    callback,
    false,
    listen
  )
}
