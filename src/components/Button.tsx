import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export function Button({ title, ...props }: ButtonProps) {
  return (
    <TouchableOpacity activeOpacity={0.7} className="h-12 w-full bg-blue-500 items-center justify-center rounded-sm" {...props}>
      <Text className="text-white text-sm font-semiBold uppercase">{title}</Text>
    </TouchableOpacity>
  );
}
