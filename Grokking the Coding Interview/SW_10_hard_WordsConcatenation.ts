// https://www.educative.io/courses/grokking-the-coding-interview/Y5YDWzqPn7O
//
// Words Concatenation

// Given a string and a list of words, find all the starting indices of substrings in the given string that are a concatenation of all the given words exactly once without any overlapping of words. It is given that all words are of the same length.

const find_word_concatenation = function (str, words) {
  const resultIndices = [];
  const wordLength = words[0].length;
  let hashMapCount = {};
  let matchCount = 0;

  for (let word of words) {
    hashMapCount[word] =
      hashMapCount[word] == null ? 1 : hashMapCount[word] + 1;
  }
  let copy = { ...hashMapCount };

  let start = 0;
  for (let i = 0; i < str.length; i = i + wordLength) {
    let word = str.slice(i, i + wordLength);
    if (hashMapCount[word] == null) {
      start = i;
      hashMapCount = { ...copy };
      continue;
    }

    hashMapCount[word]--;
    if (hashMapCount[word] === 0) matchCount++;

    while (hashMapCount[word] < 0) {
      let wordStart = str.slice(start, start + wordLength);
      if (hashMapCount[wordStart] === 0) matchCount--;
      hashMapCount[wordStart]++;
      start += wordLength;
    }

    if (matchCount === Object.keys(hashMapCount).length)
      resultIndices.push(start);
  }

  return resultIndices;
}; // T:O(n) S:(n+k)

// def find_word_concatenation(str, words):
//   # Find START INDEXES for the CONCATINATION of the GIVE WORDS
//   # all words has the same lenght

//   # Use 2 pointers from 1 side with a step of word.len
//   # use hasmMapCount Words
//   # Move end, if last word === any of the word hashMapCount --
//   # If steps of word (length > end - start) + 1 > words.length * word.len move start
//   # if first word.len word === hashMapCout ++
//   # if match count === 0 and end - start + 1 === words.length retun start

//   start_indexes = [];

//   word_len = len(words[0])
//   match_count = 0;

//   # init word count
//   hash_map_count = {}
//   for word in words:
//     if word not in hash_map_count:
//       hash_map_count[word] = 0;
//     hash_map_count[word] += 1

//   # use start and end window to count words and matchs
//   start = 0
//   for end in range(word_len - 1, len(str)+1):
//     end_word = str[end - word_len: end]

//     # count words in window
//     if end_word in hash_map_count:
//       hash_map_count[end_word] -=1

//     # increment matchs
//     if hash_map_count.get(end_word) == 0:
//       match_count += 1

//     # add start index
//     if len(hash_map_count.keys()) == match_count:
//       start_indexes.append(start);

//     # move start and dectement count and matches
//     if end - start + 1 > len(words) * word_len:
//       start_word = str[start: start + word_len]
//       if start_word in hash_map_count:
//         if hash_map_count[start_word] == 0:
//           match_count -= 1
//         hash_map_count[start_word] += 1
//       start += 1

//   return start_indexes
