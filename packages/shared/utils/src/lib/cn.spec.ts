import { describe, expect, it } from 'vitest';
import { cn } from './cn';

describe('cn', () => {
  it('should merge classes with clsx', () => {
    expect(cn('foo', 'bar')).toBe('foo bar');
  });

  it('should handle undefined, null, and empty strings', () => {
    expect(cn('foo', undefined, null, '', 'bar')).toBe('foo bar');
  });

  it('should handle arrays of classes', () => {
    expect(cn(['foo', 'bar'], 'baz')).toBe('foo bar baz');
  });

  it('should merge classes with tailwind-merge', () => {
    // tailwind-merge should merge conflicting Tailwind classes
    expect(cn('text-red-500', 'text-blue-500')).toBe('text-blue-500');
  });

  it('should use custom twMerge configuration for font-family', () => {
    // Custom font-family classes should be merged
    expect(cn('font-geist', 'font-inter')).toBe('font-inter');
  });

  it('should use custom twMerge configuration for font-size', () => {
    // Custom font-size classes should be merged
    expect(cn('text-xsm', 'text-md')).toBe('text-md');
  });

  it('should handle object syntax from clsx', () => {
    expect(cn({ foo: true, bar: false })).toBe('foo');
    expect(cn({ foo: true, bar: true })).toBe('foo bar');
  });

  it('should handle template literals', () => {
    const isActive = true;
    expect(cn(`foo ${isActive ? 'bar' : 'baz'}`)).toBe('foo bar');
  });

  it('should handle conditional classes', () => {
    const isLoading = false;
    const isError = true;
    expect(cn('base', isLoading && 'loading', isError && 'error')).toBe('base error');
  });

  it('should handle falsy values correctly', () => {
    expect(cn('foo', 0, false, 'bar', NaN)).toBe('foo bar');
  });

  it('should preserve order of non-conflicting classes', () => {
    expect(cn('text-red-500', 'font-bold', 'p-4')).toBe('text-red-500 font-bold p-4');
  });
});