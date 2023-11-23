import { Entity } from "@latticexyz/recs";
import { encodeEntity } from "@latticexyz/store-sync/recs";
import { toHex } from "viem";

const motherlodeHashes = [
  {
    entity: toHex(0, { size: 32 }) as Entity,
  },
];

for (const example of motherlodeHashes) {
  // NOTE: Calling encodeEntity results in import errors
  const testEntity = encodeEntity({ field: "int32" }, { field: 0 });
  if (example.entity !== testEntity) {
    throw new Error();
  }
}
