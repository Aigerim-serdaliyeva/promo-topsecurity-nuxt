export const state = () => ({
    objectAnimation: true,
    objectOpenedSide: ''
});

export const getters = {
    objectShownSide(state) {
        console.log(state.objectOpenedSide);
        return state.objectOpenedSide;
    }
};

export const mutations = {
    showObjectSide(state, payload) {
        state.objectOpenedSide = payload;
        console.log(payload, state);
    }
};
