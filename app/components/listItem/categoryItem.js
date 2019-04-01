import React from "react";
import ReactNative, { StyleSheet } from "react-native";
import config from "../../config";
import _ from "lodash";

export default class CategoryItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { item, onPress, style } = this.props;
    let { name } = item;

    if (!name) return null;

    if (item.id === config.interview_category_id) {
      name = config.strings.categoryModal.allCategories;
    }
    return (
      <ReactNative.TouchableOpacity
        style={[styles.container, style]}
        onPress={onPress}
      >
        <ReactNative.Text numberOfLines={1} style={styles.text}>
          {_.capitalize(name)}
        </ReactNative.Text>
      </ReactNative.TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingTop: 14,
    paddingBottom: 14,
    paddingLeft: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: config.colors.silverTwo
  },
  text: {
    fontSize: 20,
    fontFamily: config.fonts.bodyFont,
    color: config.colors.black
  }
});
