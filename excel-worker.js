importScripts("https://cdn.sheetjs.com/xlsx-0.20.3/package/dist/shim.min.js");
importScripts("https://cdn.sheetjs.com/xlsx-0.20.3/package/dist/xlsx.full.min.js");

// const XLSX = globalThis.XLSX;
// debugger;
self.onmessage = function(e) {
  postMessage({});
}

/*

  if (e.data.t === "process") {
    // Use XLSX methods in the worker
    const data = [
      { name: "John", age: 30 },
      { name: "Jane", age: 25 }
    ];
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Data");

    // Generate the file data as a Uint8Array and send it back to the main thread
    const u8 = XLSX.write(wb, { type: "array", bookType: "xlsx" });
    postMessage({t: "export", v: u8});
  }
  */
