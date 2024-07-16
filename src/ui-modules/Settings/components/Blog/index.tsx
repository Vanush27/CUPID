import React from 'react';
import {ScrollView, Text, StyleSheet, View} from 'react-native';

const Article = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>How to quit social media</Text>
      <Text style={styles.subHeader}>and why is it so hard for your brain</Text>

      <Text style={styles.paragraph}>
        Imagine you’re at the peak of a mountain, the world spread out beneath
        you, a panorama of possibilities. But every time you try to take a step
        forward, you’re held back by invisible chains. These chains are the
        subtle, yet powerful, ties of social media. Quitting social media can
        feel like trying to climb a mountain with these chains pulling you back.
        But why is it so difficult for our brains to let go? Let’s dive into the
        science and some practical steps to break free.
      </Text>

      <Text style={styles.subHeader}>The Allure of Social Media</Text>
      <Text style={styles.paragraph}>
        Social media platforms are designed to be addictive. They provide
        instant gratification, similar to the rush you get from gambling or
        eating sugary foods. When you receive a notification, a like, or a
        comment, your brain releases dopamine, the “feel-good” neurotransmitter.
        This dopamine release reinforces the behavior, making you crave more.
      </Text>

      <Text style={styles.paragraph}>
        In essence, social media hijacks the brain’s reward system. The
        anticipation of social interactions and the validation from peers create
        a cycle that’s hard to break. Over time, this cycle can lead to
        compulsive behavior, where you feel the need to check your phone
        constantly.
      </Text>

      <Text style={styles.subHeader}>The Fear of Missing Out (FOMO)</Text>
      <Text style={styles.paragraph}>
        Another psychological aspect that makes quitting social media difficult
        is the Fear of Missing Out (FOMO). Social media platforms showcase the
        highlights of everyone’s lives, often filtered and curated to show only
        the best moments. This creates an illusion that everyone else is living
        a more exciting, fulfilling life.
      </Text>

      <Text style={styles.paragraph}>
        FOMO taps into our natural desire for social belonging and status. The
        thought of missing out on important updates, events, or conversations
        can trigger anxiety and keep you tethered to social media.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    padding: 20,
    backgroundColor: '#000',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  subHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 20,
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 15,
  },
});

export default Article;
