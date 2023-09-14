import {make_sound, get_wave, get_duration, sine_sound, play} from 'sound'; 
function echo(n, d, sound) {
  // your solution goes here
  function echo_wave_helper(t, n, wave, count) {
    return count > n
      ? 0
      : (t > d * count ? (1 / math_pow(2, count)) * wave(t - d * count) : 0) +
          echo_wave_helper(t, n, wave, count + 1);
  }

  return make_sound(
    t => get_wave(sound)(t) + echo_wave_helper(t, n, get_wave(sound), 1),
    get_duration(sound) + n * d
  );
}

const test_sound = sine_sound(800, 0.2);
play(echo(2, 0.3, test_sound));
