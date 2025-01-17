import { Picker } from '@react-native-picker/picker';
import { useRef } from 'react';
import { styles } from './styles';
import { WmCategory } from '../../data/models/WmCategory';
import { ViewProps } from 'react-native';

export default function Selector(
  props: {
    value?: number;
    onChange?: (category: number ) => void;
    items: WmCategory[];
  } & ViewProps
) {
  const pickerRef = useRef();

  return (
    <Picker
      style={props.style ?? styles.picker}
      ref={pickerRef.current}
      selectedValue={props.value}
      onValueChange={(value) => {
        if (props.onChange)
          props.onChange(value);
      }}
    >
      <Picker.Item label='Selecione um item' value='' />
      {props.items.map((categ, idx) => (
        <Picker.Item label={categ.description} key={idx} value={categ.id} />
      ))}
    </Picker>
  );
}
