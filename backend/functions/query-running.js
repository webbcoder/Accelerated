const queryRunning = () => {
    setInterval(() => {
        console.log("QUERY RUNNING");
    }, 5000);
}

queryRunning();