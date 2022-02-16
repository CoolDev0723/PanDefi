import React from 'react'
import { Text, Flex, Box, ErrorIcon, Button, Link } from '@pancakeswap-libs/uikit'
import Banner from './Banner'

const MigrationV2 = () => {
  return (
    <Banner
      title={
        <Flex alignItems="center">
          <ErrorIcon color="white" width="32px" mr="16px" />
          <Text color="white" fontSize="24px" bold>
            TESTNET ONLY SWAP!
          </Text>
        </Flex>
      }
    >
      <Box ml="48px">
        <Text color="warning" bold>
            This is a testnet pancakeswap instance working with router addr
            &#39;0xD99D1c33F9fC3444f8101754aBC46c52416550D1&#39;.
        </Text>
        <Text color="white" mb="16px">
          For more information about this instance see the link below:
        </Text>
        <Button as={Link} external href="https://github.com/ibhagwan/pancake-swap-interface-v1">
          Project&#39;s Github Page
        </Button>
      </Box>
    </Banner>
  )
}

export default MigrationV2
