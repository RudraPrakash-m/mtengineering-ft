export async function submitProjectInquiry(formData) {
  // Simulate network latency for estimation submission
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // 98% simulated success
      if (formData.email.includes('error')) {
        reject(new Error('Server communication error. Please try again.'));
      } else {
        resolve({
          success: true,
          referenceId: `MTE-${Math.floor(100000 + Math.random() * 900000)}`,
          timestamp: new Date().toISOString(),
        });
      }
    }, 1200);
  });
}
