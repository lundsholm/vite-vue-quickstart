import { reactive, watch } from 'vue';

export function useMembers(callBack: (members: number) => void) {
  // object that can be updated, reactive
  const state = reactive({ members: 10 });

  // watching a nested prop
  watch(
    () => state.members,
    (newVal, oldVal) => {
      callBack(newVal);
    }
  );

  return { membersState: state };
}
