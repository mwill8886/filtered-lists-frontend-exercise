# Part 5:

Switch from using `getStatesData` to `getStatesDataAsync`. This function is like `getStatesData`, except that it returns a Promise that resolves with the state data; you can think of it as issuing an HTTP request, which implies that it may not always succeed. For now, however, you should use the options parameter on `getStatesDataAsync` to ensure that it always returns valid data.