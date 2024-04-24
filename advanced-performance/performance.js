let per = performance.timing;
// console.log(per);

// console.log(PerformanceObserver.supportedEntryTypes);


    const obs = new PerformanceObserver(list => {
        const entries = list.getEntries();
        console.log(entries)
       });
       console.log(obs);
       obs.observe({entryTypes: ["paint"], buffered: true}); // we can aad more
       

