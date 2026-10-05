import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const marketData = [
  { symbol: 'BTC/USD', price: 63420.12, change: 2.45, signal: 'BUY', confidence: 84 },
  { symbol: 'ETH/USD', price: 3480.81, change: 1.89, signal: 'BUY', confidence: 80 },
  { symbol: 'SOL/USD', price: 148.55, change: 3.1, signal: 'BUY', confidence: 77 },
  { symbol: 'AAPL', price: 215.66, change: 0.72, signal: 'HOLD', confidence: 58 },
  { symbol: 'XAU/USD', price: 2360.8, change: -0.45, signal: 'SELL', confidence: 69 },
];

const App = () => {
  const totalPortfolio = marketData.reduce((sum, item) => sum + item.price, 0);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#0b1020" />
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Trader 5</Text>
        <Text style={styles.subtitle}>AI Trading Dashboard</Text>

        <View style={styles.summaryRow}>
          <View style={styles.card}>
            <Text style={styles.label}>Portfolio</Text>
            <Text style={styles.value}>${(totalPortfolio * 0.5).toLocaleString()}</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.label}>Signals</Text>
            <Text style={styles.value}>{marketData.filter(item => item.signal !== 'HOLD').length}</Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.label}>Risk</Text>
            <Text style={styles.value}>Moderate</Text>
          </View>
        </View>

        <View style={styles.sectionHeaderRow}>
          <Text style={styles.sectionTitle}>Market Watch</Text>
          <Text style={styles.sectionBadge}>Live</Text>
        </View>

        {marketData.map(item => (
          <View key={item.symbol} style={styles.marketRow}>
            <View>
              <Text style={styles.symbol}>{item.symbol}</Text>
              <Text style={styles.smallText}>AI confidence: {item.confidence}%</Text>
            </View>
            <View style={styles.rightCol}>
              <Text style={styles.price}>${item.price.toLocaleString()}</Text>
              <Text style={[styles.change, { color: item.change >= 0 ? '#4ade80' : '#f87171' }]}>
                {item.change >= 0 ? '+' : ''}{item.change.toFixed(2)}%
              </Text>
            </View>
            <View style={styles.signalBox}>
              <Text style={[styles.signal, { color: item.signal === 'BUY' ? '#4ade80' : item.signal === 'SELL' ? '#f87171' : '#facc15' }]}>
                {item.signal}
              </Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0b1020',
  },
  container: {
    padding: 20,
    paddingBottom: 40,
  },
  title: {
    color: '#fff',
    fontSize: 32,
    fontWeight: '700',
    marginBottom: 4,
  },
  subtitle: {
    color: '#9ca3af',
    fontSize: 16,
    marginBottom: 20,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    marginBottom: 24,
  },
  card: {
    flex: 1,
    backgroundColor: '#111827',
    borderRadius: 14,
    padding: 14,
    borderWidth: 1,
    borderColor: '#1f2937',
  },
  label: {
    color: '#9ca3af',
    fontSize: 12,
    marginBottom: 8,
  },
  value: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
  sectionHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
  },
  sectionBadge: {
    color: '#4ade80',
    backgroundColor: '#052e16',
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 4,
    fontSize: 12,
    fontWeight: '700',
  },
  marketRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#111827',
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#1f2937',
  },
  rightCol: {
    alignItems: 'flex-end',
    marginHorizontal: 12,
  },
  symbol: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  smallText: {
    color: '#9ca3af',
    fontSize: 11,
    marginTop: 4,
  },
  price: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 15,
  },
  change: {
    fontSize: 12,
    marginTop: 4,
    fontWeight: '700',
  },
  signalBox: {
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 70,
  },
  signal: {
    fontSize: 16,
    fontWeight: '800',
  },
});

export default App;
