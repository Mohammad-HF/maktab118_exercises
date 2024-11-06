import { atom, RecoilRoot, selector, useRecoilState, useRecoilValue } from "recoil";

//  in app 
function App() {
  return (
    <RecoilRoot>
      <CharacterCounter />
    </RecoilRoot>
  );
}
// in ts file
const textState = atom({
  key: 'textState', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
});

// for change atom in each component
function CharacterCounter() {
  return (
    <div>
      <TextInput/>
    </div>
  );
}

function TextInput() {
  const [text, setText] = useRecoilState(textState);

  const onChange : React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
    </div>
  );
}
// selector
const charCountState = selector({
  key: 'charCountState', // unique ID (with respect to other atoms/selectors)
  get: ({get}) => {
    const text = get(textState);

    return text.length;
  },
});

// use value of charCountState in every components
function CharacterCount() {
  const count = useRecoilValue(charCountState);

  return <>Character Count: {count}</>;
}