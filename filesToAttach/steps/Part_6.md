# Part 6:

Remove the `forceSuccess` option from the `getStatesDataAsync` call. Review the `FetchStatus` enum in the types file to understand what cases should be handled. Don't focus on the styles associated with these fetch states, but do focus on the UX. In particular, consider how to best handle the `FetchStatus.Error` case to ensure a solid UX.