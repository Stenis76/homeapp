import Mui from "./Mui";

const ActionBar = () => {
  return (
    <div>
      <div>
        <Mui.Button variant="contained" color="secondary">
          Skapa projekt
        </Mui.Button>
      </div>
      <div>
        <Mui.Button variant="contained" color="secondary">
          Lägg till inventarie
        </Mui.Button>
      </div>
    </div>
  );
};

export default ActionBar;
