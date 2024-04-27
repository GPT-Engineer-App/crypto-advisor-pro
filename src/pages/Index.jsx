// Crypto Investment Advisor Page Component
import { useState } from "react";
import { Box, Button, Text, VStack, HStack, Input, useToast } from "@chakra-ui/react";
import { FaBitcoin, FaArrowUp, FaArrowDown } from "react-icons/fa";

const Index = () => {
  const [investmentAdvice, setInvestmentAdvice] = useState("");
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const handleAnalyzeData = async () => {
    setLoading(true);
    try {
      // Simulate fetching data and analyzing it. Note: The buy or sell signal is randomly generated for demonstration purposes and does not reflect real financial analysis.
      setTimeout(() => {
        const result = Math.random() > 0.5 ? "buy" : "sell";
        setInvestmentAdvice(result);
        setLoading(false);
        toast({
          title: "Analysis Complete",
          description: `Recommendation to ${result} BTC.`,
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      }, 2000);
    } catch (error) {
      setLoading(false);
      toast({
        title: "Error",
        description: "Failed to analyze data.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <VStack spacing={8} p={5}>
      <Box textAlign="center">
        <Text fontSize="2xl" fontWeight="bold">
          Crypto Investment Advisor
        </Text>
        <HStack justifyContent="center" mt={4}>
          <FaBitcoin size="3rem" />
          <Text fontSize="xl">BTC</Text>
        </HStack>
      </Box>
      <Button leftIcon={<FaBitcoin />} colorScheme="orange" isLoading={loading} onClick={handleAnalyzeData}>
        Analyze BTC Trends
      </Button>
      {investmentAdvice && (
        <HStack>
          <Text fontSize="xl">Recommendation:</Text>
          {investmentAdvice === "buy" ? (
            <Button leftIcon={<FaArrowUp />} colorScheme="green">
              Buy
            </Button>
          ) : (
            <Button leftIcon={<FaArrowDown />} colorScheme="red">
              Sell
            </Button>
          )}
        </HStack>
      )}
    </VStack>
  );
};

export default Index;
