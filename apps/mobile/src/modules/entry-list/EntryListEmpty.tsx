import { Text, View } from "react-native"

import { useGeneralSettingKey } from "@/src/atoms/settings/general"
import { CelebrateCuteReIcon } from "@/src/icons/celebrate_cute_re"
import { useColor } from "@/src/theme/colors"

export const EntryListEmpty = () => {
  const unreadOnly = useGeneralSettingKey("unreadOnly")
  const color = useColor("secondaryLabel")

  return (
    <View className="flex-1 items-center justify-center gap-2">
      {unreadOnly ? (
        <>
          <CelebrateCuteReIcon height={30} width={30} color={color} />
          <Text className="text-lg font-medium" style={{ color }}>
            Zero Unread
          </Text>
        </>
      ) : (
        <Text style={{ color }}>No entries</Text>
      )}
    </View>
  )
}
