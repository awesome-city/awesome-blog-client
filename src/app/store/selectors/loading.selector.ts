import {State} from "../app.state";

export const isLoading = (state: State) => state.loading.size > 0;
export const isLoadingByLabel = (state: State, label: string) => state.loading.has(label);
