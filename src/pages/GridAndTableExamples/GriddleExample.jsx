import React from "react";
import Griddle, {
  plugins,
  RowDefinition,
  ColumnDefinition
} from "griddle-react";
import data from "./griddleFakeData";
const GriddleExample = props => {
  return (
    <Griddle data={data} plugins={[plugins.LocalPlugin]}>
      <RowDefinition>
        <ColumnDefinition id="name" title="Name" />
        <ColumnDefinition id="state" title="Location" order={1} width={400} />
        <ColumnDefinition id="company" title="Organization" />
        <ColumnDefinition id="country" title="Country" />
        <ColumnDefinition id="city" title="City" />
        <ColumnDefinition id="favoriteNumber" title="Favorite Number" />
      </RowDefinition>
    </Griddle>
  );
};

export default GriddleExample;
