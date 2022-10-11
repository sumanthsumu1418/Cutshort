import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useCallback} from 'react';

const OptimizedFlatlist = ({
  data,
  renderItem,
  itemHeight,
  keyExtractor,
  maxToRenderPerBatch,
  updateCellsBatchingPeriod,
  initialNumToRender,
  windowSize,
  ...props
}) => {
  const ITEM_HEIGHT = itemHeight; // fixed height of item component
  const getItemLayout = useCallback(
    (data, index) => ({
      length: ITEM_HEIGHT,
      offset: ITEM_HEIGHT * index,
      index,
    }),
    [],
  );
  console.log('renderItem', renderItem, itemHeight);
  return (
    <View>
      <FlatList
        removeClippedSubviews={true}
        data={data}
        maxToRenderPerBatch={maxToRenderPerBatch || 10}
        renderItem={renderItem}
        getItemLayout={getItemLayout}
        keyExtractor={keyExtractor}
        updateCellsBatchingPeriod={updateCellsBatchingPeriod || 30}
        initialNumToRender={initialNumToRender || 8}
        windowSize={windowSize || 13}
        {...props}
      />
    </View>
  );
};

export default OptimizedFlatlist;

const styles = StyleSheet.create({});
