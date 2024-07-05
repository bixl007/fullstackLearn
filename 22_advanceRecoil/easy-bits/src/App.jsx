import {
  RecoilRoot,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import { jobAtom, messagingAtom, networkAtom, notificationAtom, totalNotificationSelector } from "./atoms";

function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
}

function MainApp() {
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobAtomCount = useRecoilValue(jobAtom);
  const notificationAtomCount = useRecoilValue(notificationAtom);
  const [messagingAtomCount, setMessagingAtomCount] =
    useRecoilState(messagingAtom);
  const totalNotificationCount = useRecoilValue(totalNotificationSelector)
  console.log(totalNotificationCount)
  return (
    <>
      <button>More</button>
      <button>
        My Network (
        {networkNotificationCount >= 100 ? "99+" : networkNotificationCount})
      </button>
      <button>Jobs ({jobAtomCount})</button>
      <button>Messaging ({messagingAtomCount})</button>
      <button>Notification ({notificationAtomCount})</button>

      <button
        onClick={() => {
          setMessagingAtomCount(messagingAtomCount + 1);
        }}
      >
        Me ({totalNotificationCount})
      </button>
      <ButtonUpdater />
    </>
  );
}

function ButtonUpdater() {
  const setNotificationAtomCount = useSetRecoilState(notificationAtom);
  return (
    <button
      onClick={() => {
        setNotificationAtomCount((c) => c + 1);
      }}
    >
      Notification Increase
    </button>
  );
}

export default App;
