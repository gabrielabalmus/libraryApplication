module.exports = {
    testEnvironment: 'jsdom',
    setupFilesAfterEnv: ['@testing-library/jest-dom'],
    rootDir: '.',
    moduleNameMapper: {
        '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
        '^@/theme/(.*)$': '<rootDir>/../ui/theme/$1',
      },
    collectCoverageFrom: ['*/components/**/.{js,ts,jsx,tsx}'],
}