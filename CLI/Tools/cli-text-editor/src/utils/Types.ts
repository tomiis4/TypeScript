type Mode = 'normal' | 'insert' | 'command' | 'visual' | 'command';

type File = {
   isSaved: boolean,
   name: string
}

type Keymap = {
   [key: string]: string
}

type SaveFileArg = {
   content: string[],
   path: string
}

type StatuslineArg = {
   mode: Mode,
   buffer: File,
   cursor: number,
   bufferLen: number
}

type Buffer = {
   content: string[],
   name: string,
   isSaved: boolean
}

type BufferlineArg = {
   openBuffer: number,
   buffers: Buffer[]
}

type Cursor = {
   row: number,
   column: number
}

type ConfigMode = {
   [key: string]: string
}

type Config = {
   [key: string]: ConfigMode
}

export type { Mode, StatuslineArg, BufferlineArg, File, Buffer, Keymap, SaveFileArg, Cursor, Config };
