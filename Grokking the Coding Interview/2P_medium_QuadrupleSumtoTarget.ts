// https://www.educative.io/courses/grokking-the-coding-interview/gxDOJJ7xAJl
// Quadruple Sum to target

// Given an array of unsorted numbers and a target number, find all unique quadruplets in it, whose sum is equal to the target number.

// Sort array O(N log N)
// use 1st pointer to iterate use if to filter unique
// use 2nd pointer to iterate, use while to Filter
// use 2 pointers to find the taget sum

// def search_quadruplets(arr, target):
//   arr.sort()

//   quadruples = []

//   for i in range(len(arr)-3):
//     # filter unique
//     if arr[i] == arr[i-1]:
//       i+=1;
//       continue;

//     for j in range(i+1, len(arr)-2):
//       # filter unique
//       while arr[j] == arr[j-1]:
//         j+=1

//       start = j+1
//       end = len(arr)-1
//       while start < end:
//         sum = arr[i] + arr[j] + arr[start] + arr[end]
//         if sum == target:
//           quadruples.append([arr[i], arr[j], arr[start], arr[end]])
//           start += 1
//           end -= 1
//           # filter unique
//           while start<end and arr[start]==arr[start-1]:
//             start +=1
//           # filter unique
//           while start<end and arr[end] == arr[end+1]:
//             end -=1

//         if sum > target:
//           end -= 1
//         if sum < target:
//           start += 1

//   return quadruples
