package test

import (
	"crypto/tls"
	"fmt"
	"testing"
	"time"

	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"
	http_helper "github.com/gruntwork-io/terratest/modules/http-helper"
	"github.com/gruntwork-io/terratest/modules/k8s"
	"github.com/gruntwork-io/terratest/modules/retry"
)

func TestNextJsAppIsDeployedAndAccessible(t *testing.T) {
	t.Parallel()

	options := k8s.NewKubectlOptions("kind-aleclabs-local", "", "default")

	// Wait for the deployment to become available
	k8s.WaitUntilNumPodsCreated(t, options, metav1.ListOptions{
		LabelSelector: "app=aleclabs-home",
	}, 1, 60, 5*time.Second) // Increased timeout for ArgoCD sync

	k8s.WaitUntilDeploymentAvailable(t, options, "aleclabs-home", 60, 5*time.Second)

	// Wait for the ingress to respond with HTTP 200
	url := "http://localhost:8080/"
	tlsConfig := tls.Config{}
	
	retry.DoWithRetry(t, "Wait for Ingress HTTP 200", 60, 5*time.Second, func() (string, error) {
		statusCode, _, err := http_helper.HttpGetE(t, url, &tlsConfig)
		if err != nil {
			return "", err
		}
		if statusCode != 200 {
			return "", fmt.Errorf("expected HTTP 200, got %d", statusCode)
		}
		return "HTTP 200 received", nil
	})
}
