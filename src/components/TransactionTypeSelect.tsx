import { View } from "react-native";

import { TransactionType } from "@/components/TransactionType";

import { colors } from "@/styles/colors";

type TransactionType = "up" | "down";

interface Props {
  selected: TransactionType;
  onChange: (type: TransactionType) => void;
}

export function TransactionTypeSelect({ selected, onChange }: Props) {
  return (
    <View className="flex-row gap-4">
      <TransactionType
        onPress={() => onChange("up")}
        type={{
          icon: "add",
          title: "Depósito",
          color: colors.green[500],
          selected: selected === "up",
        }}
      />

      <TransactionType
        onPress={() => onChange("down")}
        type={{
          icon: "remove",
          title: "Saque",
          color: colors.red[500],
          selected: selected === "down",
        }}
      />
    </View>
  );
}
