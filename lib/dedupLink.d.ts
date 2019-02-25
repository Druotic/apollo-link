import { ApolloLink, Operation, NextLink, FetchResult, Observable } from 'apollo-link';
export declare class DedupLink extends ApolloLink {
    private inFlightRequestObservables;
    private subscribers;
    private useContextForDedup;
    constructor({ useContext }?: {
        useContext?: boolean;
    });
    request(operation: Operation, forward: NextLink): Observable<FetchResult>;
}
//# sourceMappingURL=dedupLink.d.ts.map