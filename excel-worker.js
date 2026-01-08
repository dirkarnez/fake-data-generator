// https://cdn.sheetjs.com/xlsx-0.20.3/package/types/index.d.ts
/** @type {import("./types/xlsx/index.d.ts")} */
const XLSX = globalThis.XLSX;

importScripts("https://cdn.sheetjs.com/xlsx-0.20.3/package/dist/shim.min.js");
importScripts("https://cdn.sheetjs.com/xlsx-0.20.3/package/dist/xlsx.full.min.js");


self.onmessage = function(e) {
  if (e.data.type === "export") {
    // Use XLSX methods in the worker
    const wb = XLSX.utils.book_new();

    e.data.value.forEach(({ name, data }) => {
      const ws = XLSX.utils.json_to_sheet(data);
       XLSX.utils.book_append_sheet(wb, ws, name);
    });
    
    // Generate the file data as a Uint8Array and send it back to the main thread
    const u8 = XLSX.write(wb, { type: "array", bookType: "xlsx" });
    postMessage({type: "export", value: u8});
  }
}
