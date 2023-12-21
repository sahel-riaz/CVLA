import PocketBase from "pocketbase";

const pb = new PocketBase(process.env.NEXT_PUBLIC_BACKEND_URL);

export { pb };
