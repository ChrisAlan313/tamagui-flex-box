import {
  SwitchThemeButton,
  SwitchRouterButton,
  XStack,
  YStack,
  View,
} from '@my/ui'
import { Platform } from 'react-native'
import { useLink } from 'solito/navigation'

export function HomeScreen({ pagesMode = false }: { pagesMode?: boolean }) {

  const itemCount = Array.from({ length: 10 });


  return (
    <YStack
      f={1}
      jc="center"
      ai="center"
      gap="$8"
      p="$4"
      bg="$background"
    >
      <XStack
        pos="absolute"
        w="100%"
        t="$6"
        gap="$6"
        jc="center"
        fw="wrap"
        $sm={{ pos: 'relative', t: 0 }}
      >
        {Platform.OS === 'web' && (
          <>
            <SwitchRouterButton pagesMode={pagesMode} />
            <SwitchThemeButton />
          </>
        )}
      </XStack>

      <FlexContainer>
        {itemCount.map((_, i) => {
          return (
            <FlexItem key={i} />
          )
        })}
      </FlexContainer>

    </YStack>
  )
}

function FlexContainer({ children }: { children: React.ReactNode }) {
  return (
    <XStack
      gap={8}
      flexWrap="wrap"
      borderWidth={4}
      padding={4}
      width="95%"
      justifyContent='flex-start'
    >
      {children}
    </XStack>
  )
}

function FlexItem() {
  return (
    <View
      backgroundColor="$blue3Light"
      height={100}
      flexBasis="23%"
      $sm={{
        flexBasis: "100%"
      }}
      $md={{
        flexBasis: "48%"
      }}
      $lg={{
        flexBasis: "31%"
      }}
    />
  )
}
