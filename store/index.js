export const state = () => ({
    objectAnimation: true,
    objectOpenedSide: ''
});

export const getters = {
    objectShownSide(state) {
        return state.objectOpenedSide;
    }
};

export const mutations = {
    showObjectSide(state, payload) {
        state.objectOpenedSide = payload;
    }
};
